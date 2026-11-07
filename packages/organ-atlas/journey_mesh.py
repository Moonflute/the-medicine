"""Build render surfaces without smoothing across separate blood spaces."""
import numpy as np
from scipy import ndimage as ndi
from scipy.spatial import cKDTree
from scipy.sparse import coo_matrix, diags
from skimage.measure import marching_cubes


def build_surface(labels, cfg):
    step = cfg['spacing']
    origin = np.array(cfg['origin'])
    groups = {}
    for number, part in enumerate(cfg['parts'], 1):
        key = part['circuit'] if cfg.get('kind') == 'circulation' else 'lumen'
        groups.setdefault(key, []).append(number)
    vertices, triangles, regions = [], [], []
    offset = 0
    for ids in groups.values():
        # Filtering the union used to bridge thin myocardial/separation walls.
        # Each circuit sees the other circuit as exterior, including at corners.
        points = np.argwhere(np.isin(labels, ids))
        lo = np.maximum(0, points.min(axis=0) - 3)
        hi = np.minimum(labels.shape, points.max(axis=0) + 4)
        slices = tuple(slice(int(a), int(b)) for a, b in zip(lo, hi))
        mask = np.isin(labels[slices], ids)
        smooth = ndi.gaussian_filter(mask.astype(np.float32), sigma=.75 if cfg['key'] == 'upper' else .55)
        if cfg.get('kind') == 'circulation':
            # Even within one circuit, e.g. atrium beside pulmonary artery,
            # a one-voxel separating wall must survive filtering. Reserve a
            # scalar margin on both sides, not merely an epsilon-thick sheet.
            # Zero-valued wall samples also resolve diagonal saddle cells in
            # favour of the wall; an epsilon/.25 clamp can leave tiny windows.
            smooth[~mask] = 0
            smooth[mask] = np.maximum(smooth[mask], .75)
        v, f, _, _ = marching_cubes(smooth, level=.5, spacing=(step, step, step), allow_degenerate=False)
        v = ((v + lo * step)[:, ::-1] + origin).astype('<f4')
        vertices.append(v)
        triangles.append(f.astype('<u4') + offset)
        regions.append((offset, offset + len(v), ids))
        offset += len(v)
        del mask, smooth, points
    verts, faces = np.concatenate(vertices), np.concatenate(triangles)
    del vertices, triangles
    # Same 0.18 mm smoothing budget and 0.12 mm simplification budget as the
    # collision field. No navigation mask, ostium or source geometry is changed.
    edges = np.concatenate([faces[:, [0, 1]], faces[:, [1, 2]], faces[:, [2, 0]]])
    edges = np.unique(np.concatenate([edges, edges[:, ::-1]]), axis=0)
    adj = coo_matrix((np.ones(len(edges)), (edges[:, 0], edges[:, 1])), shape=(len(verts), len(verts))).tocsr()
    adj = diags(1 / np.maximum(1, np.asarray(adj.sum(axis=1)).ravel())) @ adj
    original = verts.copy()
    for _ in range(5):
        for factor in [.45, -.47]:
            verts = verts + factor * (adj @ verts - verts)
            delta = verts - original
            length = np.linalg.norm(delta, axis=1)
            verts = original + delta * np.minimum(1, .00018 / np.maximum(length, 1e-12))[:, None]
    verts = verts.astype('<f4')
    normals = np.zeros_like(verts)
    face_normals = np.cross(verts[faces[:, 1]] - verts[faces[:, 0]], verts[faces[:, 2]] - verts[faces[:, 0]])
    for corner in range(3):
        np.add.at(normals, faces[:, corner], face_normals)
    normals /= np.maximum(np.linalg.norm(normals, axis=1, keepdims=True), 1e-12)
    locations = np.clip(np.round((verts - origin) / step).astype(int), [0, 0, 0], np.array(cfg['dimensions']) - 1)
    region = labels[locations[:, 2], locations[:, 1], locations[:, 0]].copy()
    for begin, end, ids in regions:
        # Nearby vessel colors must not bleed through a chamber wall either.
        missing = np.flatnonzero(~np.isin(region[begin:end], ids)) + begin
        if not len(missing):
            continue
        inside = np.argwhere(np.isin(labels, ids))
        tree = cKDTree(inside[:, ::-1] * step + origin)
        _, near = tree.query(verts[missing])
        region[missing] = labels[tuple(inside[near].T)]
    colors = np.array([[int(p['color'][i:i+2], 16) for i in [1, 3, 5]] for p in cfg['parts']], dtype=np.uint8)[region - 1]
    return verts, faces, normals, colors, locations

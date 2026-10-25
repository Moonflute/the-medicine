"use client";

import { memo } from "react";
import { AV_OPENINGS, HEART_CHAMBERS, HEART_OUTLINE } from "@/lib/ecg-forward-anatomy";

/** Static, resolution-independent anatomical underlay. Kept outside the animation
 * render so the electrical overlay can update without rebuilding the illustration. */
export const EcgForwardHeart = memo(function EcgForwardHeart({ id }: { id: string }) {
  return <g className="ecg-heart-illustration" aria-hidden="true" pointerEvents="none">
    <defs>
      <linearGradient id={`${id}-myocardium`} x1=".12" y1="0" x2=".88" y2=".85">
        <stop stopColor="#f5e9df" /><stop offset=".42" stopColor="#e6cbbb" /><stop offset=".74" stopColor="#e9d1c1" /><stop offset="1" stopColor="#d7b5a3" />
      </linearGradient>
      <radialGradient id={`${id}-cavity`} cx=".5" cy=".42" r=".7">
        <stop stopColor="#fbfcfa" /><stop offset=".62" stopColor="#f1f3ef" /><stop offset="1" stopColor="#d6deda" />
      </radialGradient>
      <linearGradient id={`${id}-vessel`} x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#d1dde0" /><stop offset=".42" stopColor="#edf2f1" /><stop offset="1" stopColor="#c1d0d5" />
      </linearGradient>
      <linearGradient id={`${id}-aorta`} x1="0" y1="0" x2="1" y2=".5">
        <stop stopColor="#dbc3b8" /><stop offset=".48" stopColor="#f0e5dc" /><stop offset="1" stopColor="#cfb6a9" />
      </linearGradient>
      <linearGradient id={`${id}-septal-light`} x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#a87967" stopOpacity=".15" /><stop offset=".42" stopColor="#fff9ef" stopOpacity=".65" /><stop offset="1" stopColor="#aa7b69" stopOpacity=".13" />
      </linearGradient>
      <filter id={`${id}-heart-shadow`} x="-.15" y="-.1" width="1.3" height="1.25" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#354f4b" floodOpacity=".1" />
      </filter>
      <mask id={`${id}-myocardial-mask`} maskUnits="userSpaceOnUse" x="130" y="70" width="360" height="440" style={{ maskType: "luminance" }}>
        <path d={HEART_OUTLINE} fill="white" />
        {HEART_CHAMBERS.map(chamber => <path key={chamber.id} d={chamber.cavity} fill="black" />)}
        {AV_OPENINGS.map((path, i) => <path key={i} d={path} fill="black" />)}
      </mask>
    </defs>
    <g stroke="#9eafb2" strokeWidth="1.4" strokeLinejoin="round" transform="translate(0 14)">
      <path d="M160 46L186 46L188 124Q172 140 158 123Z" fill={`url(#${id}-vessel)`} />
      <path d="M163 189Q175 190 183 202L181 249L160 249Z" fill={`url(#${id}-vessel)`} />
      <path d="M426 132Q453 127 478 112L486 127Q459 143 433 149ZM430 163L480 149L485 166L432 183Z" fill={`url(#${id}-vessel)`} />
      <path d="M274 147L270 92C265 61 282 36 308 32C339 27 367 48 372 76L345 83C342 63 328 54 314 57C299 60 295 74 298 94L303 148Z" fill={`url(#${id}-aorta)`} stroke="#b39a8c" />
      <path d="M293 37L289 21M313 32L314 15M333 36L340 21" fill="none" stroke="#c3aba0" strokeWidth="9" />
      <path d="M304 147Q300 112 313 90Q330 65 360 64L408 65L408 86L362 86Q340 87 334 104L332 149Z" fill={`url(#${id}-vessel)`} />
      <path d="M165 49L180 49M164 245L177 245M477 117L482 125M480 155L483 165" stroke="#f8faf7" strokeWidth="2" />
    </g>
    <path d={HEART_OUTLINE} fill={`url(#${id}-myocardium)`} stroke="#a98270" strokeWidth="1.8" filter={`url(#${id}-heart-shadow)`} />
    <g fill={`url(#${id}-cavity)`}>
      {HEART_CHAMBERS.map(chamber => <path key={chamber.id} d={chamber.cavity} />)}
      {AV_OPENINGS.map((path, i) => <path key={i} d={path} />)}
    </g>
    <path d="M282 209Q281 318 295 374Q312 435 348 477L358 469Q316 409 312 351Q301 282 323 210Z" fill={`url(#${id}-septal-light)`} />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M198 110C179 110 168 129 170 152C171 176 184 192 200 198M250 128Q274 153 273 193M336 125C358 112 392 116 412 129C436 147 427 170 404 184M337 193Q322 188 319 181" stroke="#b29e8c" strokeWidth="1.3" />
      <path d="M196 215C174 240 177 264 183 284C196 328 229 372 289 410C274 366 267 324 270 284L279 239M324 215C354 208 387 213 414 236C439 264 432 312 417 350C402 390 379 424 353 451C328 417 310 371 307 325Q304 277 318 235" stroke="#b6a28f" strokeWidth="1.2" />
      <path d="M157 266Q172 350 250 413M166 275Q180 343 243 397M321 458Q347 487 361 480M451 253Q480 364 374 471M458 273Q470 365 393 449" stroke="#a47d68" strokeWidth=".85" opacity=".28" />
      <path d="M151 252Q145 342 239 420M363 480Q438 421 463 337" stroke="#fff7ea" strokeWidth="2.4" opacity=".55" />
    </g>
    <g fill="#d5c2ac" stroke="#b5a58f" strokeWidth=".8" opacity=".6">
      <path d="M204 323Q204 302 212 305Q226 327 239 352Q215 340 204 323Z" />
      <path d="M325 369Q328 336 338 329Q347 329 347 343L350 396Z" />
      <path d="M398 364Q391 340 394 315Q397 306 402 317L409 343Z" />
    </g>
  </g>;
});

export const EcgForwardHeartDetail = memo(function EcgForwardHeartDetail() {
  return <g className="ecg-heart-detail" aria-hidden="true" pointerEvents="none" strokeLinecap="round" strokeLinejoin="round">
    <g stroke="#a9a694" strokeWidth=".7" opacity=".48" fill="none">
      <path d="M207 216L214 310L238 224M227 224L214 310M257 222L258 346L243 229M267 218L258 346" />
      <path d="M338 223L338 339L355 232M351 230L338 339M376 226L400 320L388 217M364 231L400 320" />
    </g>
    <g fill="#f8f6ec" stroke="#9da08f" strokeWidth="1.2">
      <path d="M193 207Q209 209 226 212L237 225Q215 220 205 215Z" />
      <path d="M272 207L259 220L246 229Q248 215 255 210Z" />
      <path d="M324 202Q340 204 351 210L357 233Q341 226 334 217Z" />
      <path d="M392 208Q382 213 376 226L366 231L374 211Z" />
    </g>
    <path d="M192 205Q215 204 230 210M254 206L275 203M321 201L351 205M372 207L395 208" fill="none" stroke="#a09180" strokeWidth="2" />
  </g>;
});

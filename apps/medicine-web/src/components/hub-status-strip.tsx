type HubStatusStripProps = {
  reviewedAt: string;
  items: Array<{ label: string; value: number | string }>;
  dateLabel?: string;
};

export function HubStatusStrip({ reviewedAt, items, dateLabel = "자료 업데이트" }: HubStatusStripProps) {
  return (
    <div className="hub-status">
      {items.map((item) => <span className="hub-status-item" key={item.label}>{item.label}<b>{item.value}</b></span>)}
      <span className="hub-status-date">{dateLabel} <time dateTime={reviewedAt}>{reviewedAt}</time></span>
    </div>
  );
}

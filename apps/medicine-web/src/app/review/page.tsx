import { ReviewLaunchAction, ReviewLaunchActions } from "@/components/review-launch-actions";

export default function ReviewPage() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">통합 복습</h1>
      </header>
      <ReviewLaunchActions>
        <ReviewLaunchAction kind="qbank" href="/review/qbank" />
        <ReviewLaunchAction kind="bookmarks" href="/review/bookmarks" />
        <ReviewLaunchAction kind="audio" href="/review/audio" />
        <ReviewLaunchAction kind="cards" href="/review/cards" />
      </ReviewLaunchActions>
    </div>
  );
}

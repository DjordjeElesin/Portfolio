import '../../style/components/ui/Status.scss'

export default function Status({ isAvailable }: { isAvailable: boolean }) {
  return (
    <div className={`status ${isAvailable ? "available" : "unavailable"}`}>
      <span></span>
      <p>{isAvailable ? "Available for Work" : "Unavailable for Work"}</p>
    </div>
  );
}

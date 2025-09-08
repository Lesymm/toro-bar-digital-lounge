import { Button } from "./button";

interface FloatingActionButtonProps {
  onBookEvent: () => void;
}

export const FloatingActionButton = ({ onBookEvent }: FloatingActionButtonProps) => {
  return (
    <div className="floating-btn" onClick={onBookEvent}>
    </div>
  );
};
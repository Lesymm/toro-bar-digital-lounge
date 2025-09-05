import { Button } from "./button";
import { MessageSquare } from "lucide-react";

interface FloatingActionButtonProps {
  onBookEvent: () => void;
}

export const FloatingActionButton = ({ onBookEvent }: FloatingActionButtonProps) => {
  return (
    <div className="floating-btn" onClick={onBookEvent}>
      <MessageSquare className="h-6 w-6 text-white" />
    </div>
  );
};
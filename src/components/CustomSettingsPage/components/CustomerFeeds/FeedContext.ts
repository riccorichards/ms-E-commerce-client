import { createContext } from "react";

interface FeedContentType {
  isGridView: boolean;
  setGrigView: (val: boolean) => void;
  handleDeleteFeedProcess: (feedId: number) => void;
}

const FeedContext = createContext<FeedContentType | null>(null);

export default FeedContext;

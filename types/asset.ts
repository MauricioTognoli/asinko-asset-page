export type ConvictionLevel = "low" | "medium" | "high" | "extreme";

export type ThesisStatus = "open" | "closed";

export type ThesisOutcome = "correct" | null;

export interface VoteCounts {
  upvotes: number;
  downvotes: number;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
}

interface Votable {
  id: string;
  author: string;
  publishedAt: string;
  votes: VoteCounts;
  commentCount: number;
  comments: Comment[];
}

export interface Post extends Votable {
  content: string;
}

export interface Thesis extends Votable {
  ticker: string;
  claim: string;
  targetPrice: number;
  deadline: string;
  conviction: ConvictionLevel;
  status: ThesisStatus;
  outcome: ThesisOutcome;
  reasoning: string;
}

export interface Asset {
  id: string;
  name: string;
  ticker: string;
  category: string;
  posts: Post[];
  theses: Thesis[];
}

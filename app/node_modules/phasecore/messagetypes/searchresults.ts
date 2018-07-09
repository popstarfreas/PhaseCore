import ChatMessage from "phasecore/messagetypes/chatmessage";

interface SearchResults {
    discID: number;
    terms: string;
    smallestResultID: number;
    results: ChatMessage[];
}

export default SearchResults;

interface User {
    Username: string;
    SystemName: string;
    Avatar: string;
}

interface SearchUserResults {
    terms: string;
    results: User[];
}

export default SearchUserResults;

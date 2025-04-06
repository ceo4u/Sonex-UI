
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchVoicesProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchVoices = ({ search, setSearch }: SearchVoicesProps) => {
  return (
    <>
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Search voices..."
          className="pl-10 bg-black/50 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button variant="outline" className="bg-black/50 border-white/10 text-white hover:bg-black/70 hover:text-neon-blue">
          All Languages
        </Button>
        <Button variant="outline" className="bg-black/50 border-white/10 text-white hover:bg-black/70 hover:text-neon-blue">
          All Countries
        </Button>
      </div>
    </>
  );
};

export default SearchVoices;

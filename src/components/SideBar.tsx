import { GenreResponseProps } from "../App";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  selectGenreFunction: (genreId: number) => void;
}

export function SideBar({
  genres,
  selectGenreFunction,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => selectGenreFunction(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

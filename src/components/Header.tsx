interface HeaderProps {
  genreTitle: string;
}

export function Header({ genreTitle }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genreTitle}</span>
      </span>
    </header>
  );
}

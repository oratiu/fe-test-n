type PokemonDetailsProps = {
  label: string ;
  value: string | number;
}

export const PokemonFormattedDetail = ({label, value}: PokemonDetailsProps) => {
  return (
    <div className="flex flex-row">
      <b>{label}</b>
      :&nbsp;
      <p>{value}</p>
    </div>
  );
};

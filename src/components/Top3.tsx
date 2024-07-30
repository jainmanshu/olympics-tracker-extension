import { CountryData } from "../types/types";

interface Top3Props {
  data: CountryData[];
}

const Top3 = ({ data }: Top3Props) => {
  const top3 = data.slice(0, 3);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Top 3 Countries</h3>
      {top3.map((country) => (
        <div key={country.organisation} className="country mb-4">
          <h4 className="font-bold">{country.description}</h4>
          <p>
            Gold:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")?.gold ||
              0}
          </p>
          <p>
            Silver:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.silver || 0}
          </p>
          <p>
            Bronze:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.bronze || 0}
          </p>
          <p>
            Total:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.total || 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Top3;

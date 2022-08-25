import { FC, useState } from "react";
import PersonDataService from "../services/PersonDataService";
import IPersonData from "../types/IPersonData";

const AddPerson: FC = () => {
  const [fornavn, setFornavn] = useState("");
  const [etternavn, setEtternavn] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const onLeggTilNyClick = (): void => {
    const data: IPersonData = {
      fornavn: fornavn,
      etternavn: etternavn,
    };
    PersonDataService.createPerson(data)
      .then(() => {
        setSubmitted(true);
        setFornavn("");
        setEtternavn("");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onChangeFornavn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setFornavn(val);
  };

  const onChangeEtternavn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setEtternavn(val);
  };

  return (
    <div className="submit-form">
      <h4>Legg til person</h4>
      {isSubmitted ? (
        <div>
          <h4>Lagret</h4>
          <button
            className="btn btn-success"
            onClick={() => setSubmitted(false)}
          >
            Opprett ny
          </button>
        </div>
      ) : (
        <div className="form-group">
          <div className="row">
            <label className="col" htmlFor="fornavn">
              Fornavn
            </label>
            <input
              type="text"
              className="form-control col"
              id="fornavn"
              required
              value={fornavn}
              onChange={onChangeFornavn}
              name="fornavn"
            />
          </div>
          <div className="row">
            <label className="col" htmlFor="description">
              Etternavn
            </label>
            <input
              type="text"
              className="form-control col"
              id="etternavn"
              required
              value={etternavn}
              onChange={onChangeEtternavn}
              name="etternavn"
            />
          </div>
          <button onClick={onLeggTilNyClick} className="btn btn-success m-2">
            Lagre
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPerson;

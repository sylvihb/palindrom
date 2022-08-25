import { FC, useState } from "react";
import PersonDataService from "../services/PersonDataService";
import IPersonData from "../types/IPersonData";

const FindPerson: FC = () => {
  const [brukerid, setBrukerid] = useState("");
  const [person, setPerson] = useState<IPersonData | undefined>(undefined);

  const onCheckPalindromClick = (): void => {
    PersonDataService.isPalindrom(brukerid)
      .then((res: any) => {
        let data: IPersonData = res.data;
        setPerson(data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(undefined);
    const id = event.target.value;
    setBrukerid(id);
  };

  return (
    <div className="submit-form">
      <h4>Finn person</h4>
      <div className="form-group row">
        <label htmlFor="brukerid" className="col-sm-10 col-form-label">
          Brukerid:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control w-25 m-2"
            id="brukerid"
            required
            onChange={inputHandler}
            name="Brukerid"
          />
        </div>
      </div>

      <div className="form-group">
        <button onClick={onCheckPalindromClick} className="btn btn-success m-2">
          Sjekk palindrom
        </button>
      </div>

      {person && (
        <>
          <h4>Resultat</h4>
          <div>
            <p>
              {`${person.fornavn} er ${
                person?.erFornavnPalindrom ? "" : "ikke"
              } et palindrom`}
            </p>
            <p>
              {`${person.etternavn} er ${
                person?.erEtternavnPalindrom ? "" : "ikke"
              } et palindrom`}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FindPerson;

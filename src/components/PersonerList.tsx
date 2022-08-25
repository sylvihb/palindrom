import { FC, useEffect, useState } from "react";
import PersonDataService from "../services/PersonDataService";
import IPersonData from "../types/IPersonData";

const PersonerList: FC = () => {
  const [personer, setPersoner] = useState<Array<IPersonData>>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = (): void => {
    PersonDataService.getAllePersoner()
      .then((res: any) => {
        setPersoner(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      {personer && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Brukerid</th>
              <th scope="col">Fornavn</th>
              <th scope="col">Etternavn</th>
            </tr>
          </thead>
          <tbody>
            {personer.map((person: IPersonData, index: number) => (
              <tr key={index}>
                <td>{person.brukerId}</td>
                <td>{person.fornavn}</td>
                <td>{person.etternavn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default PersonerList;

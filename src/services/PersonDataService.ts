import http from "../http-common";
import IPersonData from "../types/IPersonData";

class PersonDataService {
  getAllePersoner() {
    return http.get<Array<IPersonData>>("/personer");
  }
  createPerson(data: IPersonData) {
    return http.post<IPersonData>("/personer", data);
  }
  getPersonById(id: string) {
    return http.get<IPersonData>(`/personer/${id}`);
  }
  updatePerson(data: IPersonData, id: number) {
    return http.put<any>(`/personer/${id}`, data);
  }
  deletePerson(id: any) {
    return http.delete<any>(`/personer/${id}`);
  }
  isPalindrom(id: any) {
    return http.get<any>(`/personer/palindrom/${id}`);
  }
}
export default new PersonDataService();

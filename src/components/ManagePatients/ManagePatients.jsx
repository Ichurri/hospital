
import { Header } from "./Header/Header"
import { PatientDetails } from "./PatientsDetails/PatientsDetails"
import { PatientsList } from "./PatientsList/PatientsList"
import { RegisterForm } from "./RegisterForm/RegisterForm"
import { SearchForm } from "./SearchForm/SearchForm"

export const ManagePatients = () => {
    return (
        <>
            <Header />
            <main>
                <RegisterForm />
                <SearchForm />
                <PatientDetails />
                <PatientsList />
            </main>
        </>
    )
}

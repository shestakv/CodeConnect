import CompanyForm from "@/widgets/CompanyForm"
import { CompanyList } from "@/widgets/CompanyList"
import style from "./CompanyPage.module.css"

export function CompanyPage() {
    return (
        <div className={style.container}>
            <CompanyForm/>
            <CompanyList/>
        </div>
    )
}
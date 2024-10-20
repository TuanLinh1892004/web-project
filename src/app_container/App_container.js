import { Category } from "./Category";

export function App_container() {
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className=" row sm-gutter app__content">
                    <Category />
                </div>
            </div>
        </div>
    )
}
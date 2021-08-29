import { useBusinesses } from "./BusinessData.js"
import { Business } from "./Business.js"
import { businessNY } from "./BusinessData.js"

const contentTarget = document.querySelector(".business")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    const businessArrayNY = businessNY();
    contentTarget.innerHTML = "<h1>Active Business</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );

    contentTarget.innerHTML += "<h1>New York Business</h1>" 

    businessArrayNY.forEach( objectNY => {
        contentTarget.innerHTML += Business(objectNY);
    })
}

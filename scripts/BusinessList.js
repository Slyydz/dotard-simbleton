import { useBusinesses } from "./BusinessData.js"
import { Business } from "./Business.js"
import { Agent } from "./Business.js"
import { businessNY } from "./BusinessData.js"
import { purchaseArray } from "./BusinessData.js"

const contentTarget = document.querySelector(".business");
const contentTargetAgent = document.querySelector(".agents");

export const BusinessList = () => {
    const businessArray = useBusinesses();
    const businessArrayNY = businessNY();
    

    //Business
    contentTarget.innerHTML = "<h1>Active Business</h1>";

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject);
        }
    );
    //BusinessNY
    contentTarget.innerHTML += "<h1>New York Business</h1>";

    businessArrayNY.forEach( objectNY => {
        contentTarget.innerHTML += Business(objectNY);
    });

    

}

export const AgentList = () => {
    contentTarget.innerHTML += "<h1>Purchasing Agents</h1>";

    purchaseArray.forEach(count => {
    console.log(count);
    contentTarget.innerHTML += Agent(count);
});
}
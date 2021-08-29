import { useBusinesses } from "./BusinessData.js"
import { Business } from "./Business.js"
import { Agent } from "./Business.js"
import { businessNY } from "./BusinessData.js"
import { purchaseArray } from "./BusinessData.js"

const contentTarget = document.querySelector(".business");
const contentTargetAgent = document.querySelector(".agents");
const businessArray = useBusinesses();

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

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        const arrayUse = useBusinesses();
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

                

            const foundBusiness = arrayUse.find(countVar => (countVar.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)))

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <h4>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h4>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });

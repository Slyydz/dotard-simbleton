export const Business = (businessObject) => {
    return `
        <section class="supply">
            <h2 class="company-name">${businessObject.companyName}</h2>
            <div class="company-address">
                ${businessObject.addressFullStreet}, ${businessObject.addressStateCode}
            </div>
        </section>
    `
}

export const Agent = (agentObject) => {
    return `
        <section class="purchase-agent">
            <h2 class="agent-name">${agentObject.name.nameFirst} ${agentObject.name.nameLast}</h2>
            <h4 class ="company-name">${agentObject.company}</h4>
            <p class="phone-number">${agentObject.phone}</p>
        </section>
    `
}
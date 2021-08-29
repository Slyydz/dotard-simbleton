export const Business = (businessObject) => {
    return `
        <section class="supply">
            <h2 class="company__name">${businessObject.companyName}</h2>
            <div class="company__address">
                ${businessObject.addressFullStreet}, ${businessObject.addressStateCode}
            </div>
        </section>
    `
}
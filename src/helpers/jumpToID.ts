export const jumpToElementByID = (id: string) => {
    const releventDiv = document.getElementById(id);
    if (releventDiv) {
        // releventDiv.scrollTo()
        releventDiv.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    }
}

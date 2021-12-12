const expandableHeaders = $('.expandable-header')
const expanded = []
for (let i = 0; i < expandableHeaders.length; i++) {
    let header = expandableHeaders[i]
    let icon = header.getElementsByTagName("img")[0]
    let section = header.parentElement.getElementsByClassName("expandable-section")[0]
    section.style.display = "none"
    expanded.push(false)
    header.onclick = () => {
        if (expanded[i]) {
            section.style.display = "none"
            section.style.animation = "none"
            icon.style.animation = "rotate-back90 0.25s"
            setTimeout(() => icon.style.transform = "rotate(0deg)", 240)
            expanded[i] = false
        }
        else {
            section.style.display = "block"
            section.style.animation = "fade-in 0.5s"
            icon.style.animation = "rotate-90 0.25s"
            setTimeout(() => icon.style.transform = "rotate(90deg)", 240)
            expanded[i] = true
        }
    }
}

// Make the section targeted by URL expand
let url = window.location
let target = url.toString().split("#")[1]
let headerTarget = target + "-header"
document.getElementById(headerTarget).click()

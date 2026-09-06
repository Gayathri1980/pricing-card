
const billingToggle =
    document.getElementById("billingToggle");

const prices =
    document.querySelectorAll(".amount");

const periods =
    document.querySelectorAll(".period");

const monthlyLabel =
    document.getElementById("monthlyLabel");

const yearlyLabel =
    document.getElementById("yearlyLabel");

billingToggle.addEventListener("change", function () {

    const isYearly = this.checked;
    prices.forEach(function (price) {

        if (isYearly) {
            price.textContent =
                price.dataset.yearly;

        } else {

            price.textContent =
                price.dataset.monthly;
        }

    });

    periods.forEach(function (period) {

        period.textContent =
            isYearly ? "/year" : "/month";

    });

    monthlyLabel.classList.toggle(
        "active",
        !isYearly
    );

    yearlyLabel.classList.toggle(
        "active",
        isYearly
    );

});

const planButtons =
    document.querySelectorAll(".plan-btn");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

planButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedPlan =
            this.dataset.plan;

        toastMessage.textContent =
            `${selectedPlan} plan selected!`;

        toast.classList.add("show");

        setTimeout(function () {

            toast.classList.remove("show");

        }, 3000);

    });

});

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

const faqItems =
    document.querySelectorAll("details");

faqItems.forEach(function (item) {

    item.addEventListener("toggle", function () {

        if (this.open) {

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {

                    otherItem.removeAttribute("open");

                }

            });

        }

    });

});

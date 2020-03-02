AOS.init({
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    disable: function () {
        return window.innerWidth > 960;
    }
});
var addFiles = (function (window) {

    return {
        loadAdditionalFiles: function (url) {

            let script = document.createElement("script");

            script.src = url;

            script.setAttribute("data-main", "js/app");

            let includeScript = document.getElementsByTagName('script')[0];
            includeScript.parentNode.insertBefore(script, includeScript);
        }
    }

})(window);

const r = "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js";

addFiles.loadAdditionalFiles(r);
function usun_pl(formularz) {
    for (i = 0; i < formularz.length; i++) {
        var pole = formularz.elements[i];
        if (pole.type != "text" && pole.type != "textarea") continue;
        var str = "";
        for (j = 0; j < pole.value.length; j++) {
            switch (pole.value.charAt(j)) {
                case "ą": str += "a"; break;
                case "ć": str += "c"; break;
                case "ę": str += "e"; break;
                case "ł": str += "l"; break;
                case "ń": str += "n"; break;
                case "ó": str += "o"; break;
                case "ś": str += "s"; break;
                case "ź": str += "z"; break;
                case "ż": str += "z"; break;
                case "Ą": str += "a"; break;
                case "Ć": str += "c"; break;
                case "Ę": str += "e"; break;
                case "Ł": str += "l"; break;
                case "Ń": str += "n"; break;
                case "Ó": str += "o"; break;
                case "Ś": str += "s"; break;
                case "Ź": str += "z"; break;
                case "Ż": str += "z"; break;
                default: str += pole.value.charAt(j); break;
            }
        }
        pole.value = str;
    }
}
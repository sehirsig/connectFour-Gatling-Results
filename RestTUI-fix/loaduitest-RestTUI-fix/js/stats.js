var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "945",
        "ko": "1055"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "145"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "71",
        "ko": "43"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "67",
        "ko": "26"
    },
    "percentiles1": {
        "total": "48",
        "ok": "58",
        "ko": "47"
    },
    "percentiles2": {
        "total": "69",
        "ok": "142",
        "ko": "57"
    },
    "percentiles3": {
        "total": "166",
        "ok": "170",
        "ko": "76"
    },
    "percentiles4": {
        "total": "218",
        "ok": "222",
        "ko": "136"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 945,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1055,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "157.5",
        "ko": "175.833"
    }
},
contents: {
"req_get-ui--1-8672d": {
        type: "REQUEST",
        name: "Get UI #1",
path: "Get UI #1",
pathFormatted: "req_get-ui--1-8672d",
stats: {
    "name": "Get UI #1",
    "numberOfRequests": {
        "total": "1000",
        "ok": "354",
        "ko": "646"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "145"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "149",
        "ko": "59"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "35",
        "ko": "19"
    },
    "percentiles1": {
        "total": "65",
        "ok": "151",
        "ko": "54"
    },
    "percentiles2": {
        "total": "140",
        "ok": "166",
        "ko": "64"
    },
    "percentiles3": {
        "total": "169",
        "ok": "219",
        "ko": "85"
    },
    "percentiles4": {
        "total": "221",
        "ok": "247",
        "ko": "140"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 354,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 646,
    "percentage": 65
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "59",
        "ko": "107.667"
    }
}
    },"req_get-ui--2-2d3d8": {
        type: "REQUEST",
        name: "Get UI #2",
path: "Get UI #2",
pathFormatted: "req_get-ui--2-2d3d8",
stats: {
    "name": "Get UI #2",
    "numberOfRequests": {
        "total": "1000",
        "ok": "591",
        "ko": "409"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "82",
        "ok": "82",
        "ko": "30"
    },
    "meanResponseTime": {
        "total": "21",
        "ok": "24",
        "ko": "17"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "26",
        "ko": "4"
    },
    "percentiles1": {
        "total": "16",
        "ok": "9",
        "ko": "17"
    },
    "percentiles2": {
        "total": "22",
        "ok": "54",
        "ko": "20"
    },
    "percentiles3": {
        "total": "66",
        "ok": "70",
        "ko": "22"
    },
    "percentiles4": {
        "total": "74",
        "ok": "75",
        "ko": "28"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 591,
    "percentage": 59
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 409,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "98.5",
        "ko": "68.167"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

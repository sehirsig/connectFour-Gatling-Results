var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "655",
        "ko": "1345"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "210",
        "ok": "210",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "87",
        "ko": "49"
    },
    "standardDeviation": {
        "total": "48",
        "ok": "72",
        "ko": "22"
    },
    "percentiles1": {
        "total": "44",
        "ok": "97",
        "ko": "43"
    },
    "percentiles2": {
        "total": "78",
        "ok": "151",
        "ko": "64"
    },
    "percentiles3": {
        "total": "157",
        "ok": "208",
        "ko": "88"
    },
    "percentiles4": {
        "total": "208",
        "ok": "209",
        "ko": "115"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 655,
    "percentage": 33
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
    "count": 1345,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "109.167",
        "ko": "224.167"
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
        "ok": "264",
        "ko": "736"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "23"
    },
    "maxResponseTime": {
        "total": "210",
        "ok": "210",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "159",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "39",
        "ko": "20"
    },
    "percentiles1": {
        "total": "71",
        "ok": "153",
        "ko": "58"
    },
    "percentiles2": {
        "total": "112",
        "ok": "204",
        "ko": "75"
    },
    "percentiles3": {
        "total": "205",
        "ok": "208",
        "ko": "95"
    },
    "percentiles4": {
        "total": "209",
        "ok": "209",
        "ko": "119"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 264,
    "percentage": 26
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
    "count": 736,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "44",
        "ko": "122.667"
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
        "ok": "391",
        "ko": "609"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "125",
        "ok": "125",
        "ko": "76"
    },
    "meanResponseTime": {
        "total": "35",
        "ok": "38",
        "ko": "33"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "41",
        "ko": "12"
    },
    "percentiles1": {
        "total": "31",
        "ok": "20",
        "ko": "34"
    },
    "percentiles2": {
        "total": "40",
        "ok": "59",
        "ko": "39"
    },
    "percentiles3": {
        "total": "108",
        "ok": "117",
        "ko": "52"
    },
    "percentiles4": {
        "total": "120",
        "ok": "122",
        "ko": "70"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 391,
    "percentage": 39
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
    "count": 609,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "65.167",
        "ko": "101.5"
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

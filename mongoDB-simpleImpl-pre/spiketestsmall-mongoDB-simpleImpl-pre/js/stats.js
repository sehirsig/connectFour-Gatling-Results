var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "1648",
        "ko": "4352"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "3492",
        "ok": "3492",
        "ko": "3477"
    },
    "meanResponseTime": {
        "total": "1578",
        "ok": "1735",
        "ko": "1519"
    },
    "standardDeviation": {
        "total": "786",
        "ok": "1040",
        "ko": "656"
    },
    "percentiles1": {
        "total": "1376",
        "ok": "2239",
        "ko": "1340"
    },
    "percentiles2": {
        "total": "2250",
        "ok": "2563",
        "ko": "2066"
    },
    "percentiles3": {
        "total": "2735",
        "ok": "3167",
        "ko": "2595"
    },
    "percentiles4": {
        "total": "3360",
        "ok": "3450",
        "ko": "2904"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 575,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 967,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 4352,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1200",
        "ok": "329.6",
        "ko": "870.4"
    }
},
contents: {
"req_create-database-71799": {
        type: "REQUEST",
        name: "create database",
path: "create database",
pathFormatted: "req_create-database-71799",
stats: {
    "name": "create database",
    "numberOfRequests": {
        "total": "3000",
        "ok": "557",
        "ko": "2443"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "237",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "3451",
        "ok": "3451",
        "ko": "1637"
    },
    "meanResponseTime": {
        "total": "1242",
        "ok": "2149",
        "ko": "1035"
    },
    "standardDeviation": {
        "total": "683",
        "ok": "1004",
        "ko": "336"
    },
    "percentiles1": {
        "total": "1160",
        "ok": "2549",
        "ko": "1134"
    },
    "percentiles2": {
        "total": "1333",
        "ok": "2788",
        "ko": "1286"
    },
    "percentiles3": {
        "total": "2673",
        "ok": "3374",
        "ko": "1383"
    },
    "percentiles4": {
        "total": "3373",
        "ok": "3448",
        "ko": "1428"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 143,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 414,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 2443,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "600",
        "ok": "111.4",
        "ko": "488.6"
    }
}
    },"req_delete-database-12425": {
        type: "REQUEST",
        name: "delete database",
path: "delete database",
pathFormatted: "req_delete-database-12425",
stats: {
    "name": "delete database",
    "numberOfRequests": {
        "total": "3000",
        "ok": "1091",
        "ko": "1909"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "977"
    },
    "maxResponseTime": {
        "total": "3492",
        "ok": "3492",
        "ko": "3477"
    },
    "meanResponseTime": {
        "total": "1914",
        "ok": "1523",
        "ko": "2138"
    },
    "standardDeviation": {
        "total": "737",
        "ok": "994",
        "ko": "390"
    },
    "percentiles1": {
        "total": "2107",
        "ok": "1982",
        "ko": "2156"
    },
    "percentiles2": {
        "total": "2424",
        "ok": "2402",
        "ko": "2445"
    },
    "percentiles3": {
        "total": "2735",
        "ok": "2890",
        "ko": "2704"
    },
    "percentiles4": {
        "total": "3309",
        "ok": "3489",
        "ko": "3003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 432,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 553,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 1909,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "600",
        "ok": "218.2",
        "ko": "381.8"
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

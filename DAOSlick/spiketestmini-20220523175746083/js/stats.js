var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "378",
        "ko": "222"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "955",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "1930",
        "ok": "1930",
        "ko": "1322"
    },
    "meanResponseTime": {
        "total": "1324",
        "ok": "1703",
        "ko": "678"
    },
    "standardDeviation": {
        "total": "638",
        "ok": "188",
        "ko": "613"
    },
    "percentiles1": {
        "total": "1564",
        "ok": "1762",
        "ko": "1234"
    },
    "percentiles2": {
        "total": "1811",
        "ok": "1837",
        "ko": "1272"
    },
    "percentiles3": {
        "total": "1892",
        "ok": "1904",
        "ko": "1295"
    },
    "percentiles4": {
        "total": "1924",
        "ok": "1927",
        "ko": "1304"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 364,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 222,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150",
        "ok": "94.5",
        "ko": "55.5"
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
        "total": "300",
        "ok": "119",
        "ko": "181"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "955",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "1650",
        "ok": "1650",
        "ko": "1322"
    },
    "meanResponseTime": {
        "total": "1083",
        "ok": "1484",
        "ko": "819"
    },
    "standardDeviation": {
        "total": "575",
        "ok": "166",
        "ko": "595"
    },
    "percentiles1": {
        "total": "1276",
        "ok": "1532",
        "ko": "1245"
    },
    "percentiles2": {
        "total": "1499",
        "ok": "1586",
        "ko": "1276"
    },
    "percentiles3": {
        "total": "1607",
        "ok": "1628",
        "ko": "1295"
    },
    "percentiles4": {
        "total": "1632",
        "ok": "1646",
        "ko": "1307"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 105,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 181,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "29.75",
        "ko": "45.25"
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
        "total": "300",
        "ok": "259",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "1503",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "1930",
        "ok": "1930",
        "ko": "66"
    },
    "meanResponseTime": {
        "total": "1564",
        "ok": "1803",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "605",
        "ok": "83",
        "ko": "5"
    },
    "percentiles1": {
        "total": "1811",
        "ok": "1821",
        "ko": "55"
    },
    "percentiles2": {
        "total": "1849",
        "ok": "1856",
        "ko": "60"
    },
    "percentiles3": {
        "total": "1911",
        "ok": "1913",
        "ko": "65"
    },
    "percentiles4": {
        "total": "1929",
        "ok": "1929",
        "ko": "66"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 259,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 41,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "64.75",
        "ko": "10.25"
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

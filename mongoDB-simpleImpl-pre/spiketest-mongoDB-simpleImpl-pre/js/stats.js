var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "7789",
        "ko": "52211"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "423"
    },
    "maxResponseTime": {
        "total": "18460",
        "ok": "18460",
        "ko": "18338"
    },
    "meanResponseTime": {
        "total": "10923",
        "ok": "8581",
        "ko": "11272"
    },
    "standardDeviation": {
        "total": "5212",
        "ok": "6130",
        "ko": "4967"
    },
    "percentiles1": {
        "total": "13307",
        "ok": "8494",
        "ko": "13542"
    },
    "percentiles2": {
        "total": "15205",
        "ok": "14743",
        "ko": "15262"
    },
    "percentiles3": {
        "total": "16608",
        "ok": "16622",
        "ko": "16591"
    },
    "percentiles4": {
        "total": "17282",
        "ok": "17780",
        "ko": "17218"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 292,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 343,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7154,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 52211,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "251.258",
        "ko": "1684.226"
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
        "total": "30000",
        "ok": "2636",
        "ko": "27364"
    },
    "minResponseTime": {
        "total": "423",
        "ok": "435",
        "ko": "423"
    },
    "maxResponseTime": {
        "total": "17952",
        "ok": "17952",
        "ko": "17159"
    },
    "meanResponseTime": {
        "total": "7927",
        "ok": "9325",
        "ko": "7793"
    },
    "standardDeviation": {
        "total": "4506",
        "ok": "4178",
        "ko": "4514"
    },
    "percentiles1": {
        "total": "7578",
        "ok": "8601",
        "ko": "7466"
    },
    "percentiles2": {
        "total": "11693",
        "ok": "12536",
        "ko": "11652"
    },
    "percentiles3": {
        "total": "15192",
        "ok": "16281",
        "ko": "14962"
    },
    "percentiles4": {
        "total": "16553",
        "ok": "17744",
        "ko": "16183"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2597,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 27364,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "967.742",
        "ok": "85.032",
        "ko": "882.71"
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
        "total": "30000",
        "ok": "5153",
        "ko": "24847"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "10434"
    },
    "maxResponseTime": {
        "total": "18460",
        "ok": "18460",
        "ko": "18338"
    },
    "meanResponseTime": {
        "total": "13919",
        "ok": "8200",
        "ko": "15104"
    },
    "standardDeviation": {
        "total": "4009",
        "ok": "6888",
        "ko": "1174"
    },
    "percentiles1": {
        "total": "15020",
        "ok": "2422",
        "ko": "15194"
    },
    "percentiles2": {
        "total": "15901",
        "ok": "15104",
        "ko": "15963"
    },
    "percentiles3": {
        "total": "16878",
        "ok": "16814",
        "ko": "16880"
    },
    "percentiles4": {
        "total": "17455",
        "ok": "17936",
        "ko": "17409"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 254,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 342,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4557,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 24847,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "967.742",
        "ok": "166.226",
        "ko": "801.516"
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

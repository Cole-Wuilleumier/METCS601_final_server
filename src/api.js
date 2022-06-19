const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();


router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get('/steps',(req,res) => {
    res.json({steps:[
        {
          "Date": "May 23",
          "Actual": 3761,
          "Goal": 5180
        },
        {
          "Date": "May 24",
          "Actual": 7001,
          "Goal": 4900
        },
        {
          "Date": "May 25",
          "Actual": 3957,
          "Goal": 5110
        },
        {
          "Date": "May 26",
          "Actual": 3647,
          "Goal": 5000
        },
        {
          "Date": "May 27",
          "Actual": 4369,
          "Goal": 4730
        },
        {
          "Date": "May 28",
          "Actual": 4862,
          "Goal": 4660
        },
        {
          "Date": "May 29",
          "Actual": 12504,
          "Goal": 4680
        },
        {
          "Date": "May 30",
          "Actual": 5415,
          "Goal": 6250
        },
        {
          "Date": "May 31",
          "Actual": 6371,
          "Goal": 6170
        },
        {
          "Date": "Jun 1",
          "Actual": 4046,
          "Goal": 6190
        },
        {
          "Date": "Jun 2",
          "Actual": 4184,
          "Goal": 5980
        },
        {
          "Date": "Jun 3",
          "Actual": 5676,
          "Goal": 5620
        },
        {
          "Date": "Jun 4",
          "Actual": 11611,
          "Goal": 5630
        },
        {
          "Date": "Jun 5",
          "Actual": 9558,
          "Goal": 6830
        },
        {
          "Date": "Jun 6",
          "Actual": 1952,
          "Goal": 7380
        },
        {
          "Date": "Jun 7",
          "Actual": 4036,
          "Goal": 6840
        },
        {
          "Date": "Jun 8",
          "Actual": 3895,
          "Goal": 6280
        },
        {
          "Date": "Jun 9",
          "Actual": 6053,
          "Goal": 5810
        },
        {
          "Date": "Jun 10",
          "Actual": 7320,
          "Goal": 5840
        },
        {
          "Date": "Jun 11",
          "Actual": 23637,
          "Goal": 6140
        },
        {
          "Date": "Jun 12",
          "Actual": 19208,
          "Goal": 8140
        },
        {
          "Date": "Jun 13",
          "Actual": 2931,
          "Goal": 10140
        },
        {
          "Date": "Jun 14",
          "Actual": 3494,
          "Goal": 9420
        },
        {
          "Date": "Jun 15",
          "Actual": 3785,
          "Goal": 8240
        },
        {
          "Date": "Jun 16",
          "Actual": 3623,
          "Goal": 7350
        },
        {
          "Date": "Jun 17",
          "Actual": 11267,
          "Goal": 6610
        },
        {
          "Date": "Jun 18",
          "Actual": 7876,
          "Goal": 7080
        },
        {
          "Date": "Jun 19",
          "Actual": 243,
          "Goal": 7240
        }
       ]});

})

router.get('/body_battery',(req,res) => {
  res.json({body_battery:[
    {
      "Date": "May 23",
      "Body Battery": 5
    },
    {
      "Date": "May 23",
      "Body Battery": 46
    },
    {
      "Date": "May 23",
      "Body Battery": 42
    },
    {
      "Date": "May 23",
      "Body Battery": 36
    },
    {
      "Date": "May 23",
      "Body Battery": 37
    },
    {
      "Date": "May 23",
      "Body Battery": 28
    },
    {
      "Date": "May 24",
      "Body Battery": 36
    },
    {
      "Date": "May 24",
      "Body Battery": 100
    },
    {
      "Date": "May 24",
      "Body Battery": 94
    },
    {
      "Date": "May 24",
      "Body Battery": 61
    },
    {
      "Date": "May 24",
      "Body Battery": 60
    },
    {
      "Date": "May 24",
      "Body Battery": 27
    },
    {
      "Date": "May 25",
      "Body Battery": 30
    },
    {
      "Date": "May 25",
      "Body Battery": 100
    },
    {
      "Date": "May 25",
      "Body Battery": 94
    },
    {
      "Date": "May 25",
      "Body Battery": 67
    },
    {
      "Date": "May 25",
      "Body Battery": 67
    },
    {
      "Date": "May 25",
      "Body Battery": 17
    },
    {
      "Date": "May 26",
      "Body Battery": 15
    },
    {
      "Date": "May 26",
      "Body Battery": 19
    },
    {
      "Date": "May 26",
      "Body Battery": 21
    },
    {
      "Date": "May 26",
      "Body Battery": 17
    },
    {
      "Date": "May 26",
      "Body Battery": 18
    },
    {
      "Date": "May 26",
      "Body Battery": 6
    },
    {
      "Date": "May 27",
      "Body Battery": 7
    },
    {
      "Date": "May 27",
      "Body Battery": 62
    },
    {
      "Date": "May 27",
      "Body Battery": 61
    },
    {
      "Date": "May 27",
      "Body Battery": 48
    },
    {
      "Date": "May 27",
      "Body Battery": 48
    },
    {
      "Date": "May 27",
      "Body Battery": 9
    },
    {
      "Date": "May 28",
      "Body Battery": 5
    },
    {
      "Date": "May 28",
      "Body Battery": 11
    },
    {
      "Date": "May 28",
      "Body Battery": 11
    },
    {
      "Date": "May 28",
      "Body Battery": 5
    },
    {
      "Date": "May 28",
      "Body Battery": 5
    },
    {
      "Date": "May 28",
      "Body Battery": 26
    },
    {
      "Date": "May 29",
      "Body Battery": 13
    },
    {
      "Date": "May 29",
      "Body Battery": 35
    },
    {
      "Date": "May 29",
      "Body Battery": 39
    },
    {
      "Date": "May 29",
      "Body Battery": 13
    },
    {
      "Date": "May 29",
      "Body Battery": 13
    },
    {
      "Date": "May 29",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 5
    },
    {
      "Date": "May 30",
      "Body Battery": 17
    },
    {
      "Date": "May 31",
      "Body Battery": 18
    },
    {
      "Date": "May 31",
      "Body Battery": 100
    },
    {
      "Date": "May 31",
      "Body Battery": 98
    },
    {
      "Date": "May 31",
      "Body Battery": 69
    },
    {
      "Date": "May 31",
      "Body Battery": 69
    },
    {
      "Date": "May 31",
      "Body Battery": 39
    },
    {
      "Date": "Jun 1",
      "Body Battery": 48
    },
    {
      "Date": "Jun 1",
      "Body Battery": 100
    },
    {
      "Date": "Jun 1",
      "Body Battery": 93
    },
    {
      "Date": "Jun 1",
      "Body Battery": 59
    },
    {
      "Date": "Jun 1",
      "Body Battery": 59
    },
    {
      "Date": "Jun 1",
      "Body Battery": 11
    },
    {
      "Date": "Jun 2",
      "Body Battery": 11
    },
    {
      "Date": "Jun 2",
      "Body Battery": 8
    },
    {
      "Date": "Jun 2",
      "Body Battery": 9
    },
    {
      "Date": "Jun 2",
      "Body Battery": 6
    },
    {
      "Date": "Jun 2",
      "Body Battery": 6
    },
    {
      "Date": "Jun 2",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 3",
      "Body Battery": 5
    },
    {
      "Date": "Jun 4",
      "Body Battery": 5
    },
    {
      "Date": "Jun 4",
      "Body Battery": 29
    },
    {
      "Date": "Jun 4",
      "Body Battery": 30
    },
    {
      "Date": "Jun 4",
      "Body Battery": 9
    },
    {
      "Date": "Jun 4",
      "Body Battery": 9
    },
    {
      "Date": "Jun 4",
      "Body Battery": 5
    },
    {
      "Date": "Jun 5",
      "Body Battery": 5
    },
    {
      "Date": "Jun 5",
      "Body Battery": 8
    },
    {
      "Date": "Jun 5",
      "Body Battery": 8
    },
    {
      "Date": "Jun 5",
      "Body Battery": 5
    },
    {
      "Date": "Jun 5",
      "Body Battery": 5
    },
    {
      "Date": "Jun 5",
      "Body Battery": 5
    },
    {
      "Date": "Jun 6",
      "Body Battery": 5
    },
    {
      "Date": "Jun 6",
      "Body Battery": 60
    },
    {
      "Date": "Jun 6",
      "Body Battery": 60
    },
    {
      "Date": "Jun 6",
      "Body Battery": 46
    },
    {
      "Date": "Jun 6",
      "Body Battery": 42
    },
    {
      "Date": "Jun 6",
      "Body Battery": 67
    },
    {
      "Date": "Jun 7",
      "Body Battery": 67
    },
    {
      "Date": "Jun 7",
      "Body Battery": 100
    },
    {
      "Date": "Jun 7",
      "Body Battery": 91
    },
    {
      "Date": "Jun 7",
      "Body Battery": 53
    },
    {
      "Date": "Jun 7",
      "Body Battery": 53
    },
    {
      "Date": "Jun 7",
      "Body Battery": 33
    },
    {
      "Date": "Jun 8",
      "Body Battery": 33
    },
    {
      "Date": "Jun 8",
      "Body Battery": 53
    },
    {
      "Date": "Jun 8",
      "Body Battery": 51
    },
    {
      "Date": "Jun 8",
      "Body Battery": 38
    },
    {
      "Date": "Jun 8",
      "Body Battery": 38
    },
    {
      "Date": "Jun 8",
      "Body Battery": 11
    },
    {
      "Date": "Jun 9",
      "Body Battery": 9
    },
    {
      "Date": "Jun 9",
      "Body Battery": 27
    },
    {
      "Date": "Jun 9",
      "Body Battery": 26
    },
    {
      "Date": "Jun 9",
      "Body Battery": 18
    },
    {
      "Date": "Jun 9",
      "Body Battery": 20
    },
    {
      "Date": "Jun 9",
      "Body Battery": 13
    },
    {
      "Date": "Jun 10",
      "Body Battery": 19
    },
    {
      "Date": "Jun 10",
      "Body Battery": 100
    },
    {
      "Date": "Jun 10",
      "Body Battery": 96
    },
    {
      "Date": "Jun 10",
      "Body Battery": 68
    },
    {
      "Date": "Jun 10",
      "Body Battery": 68
    },
    {
      "Date": "Jun 10",
      "Body Battery": 47
    },
    {
      "Date": "Jun 11",
      "Body Battery": 47
    },
    {
      "Date": "Jun 11",
      "Body Battery": 33
    },
    {
      "Date": "Jun 11",
      "Body Battery": 34
    },
    {
      "Date": "Jun 11",
      "Body Battery": 17
    },
    {
      "Date": "Jun 11",
      "Body Battery": 17
    },
    {
      "Date": "Jun 11",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 5
    },
    {
      "Date": "Jun 12",
      "Body Battery": 7
    },
    {
      "Date": "Jun 13",
      "Body Battery": 7
    },
    {
      "Date": "Jun 13",
      "Body Battery": 76
    },
    {
      "Date": "Jun 13",
      "Body Battery": 75
    },
    {
      "Date": "Jun 13",
      "Body Battery": 48
    },
    {
      "Date": "Jun 13",
      "Body Battery": 42
    },
    {
      "Date": "Jun 13",
      "Body Battery": 52
    },
    {
      "Date": "Jun 14",
      "Body Battery": 44
    },
    {
      "Date": "Jun 14",
      "Body Battery": 73
    },
    {
      "Date": "Jun 14",
      "Body Battery": 76
    },
    {
      "Date": "Jun 14",
      "Body Battery": 41
    },
    {
      "Date": "Jun 14",
      "Body Battery": 41
    },
    {
      "Date": "Jun 14",
      "Body Battery": 18
    },
    {
      "Date": "Jun 15",
      "Body Battery": 20
    },
    {
      "Date": "Jun 15",
      "Body Battery": 79
    },
    {
      "Date": "Jun 15",
      "Body Battery": 73
    },
    {
      "Date": "Jun 15",
      "Body Battery": 53
    },
    {
      "Date": "Jun 15",
      "Body Battery": 47
    },
    {
      "Date": "Jun 15",
      "Body Battery": 64
    },
    {
      "Date": "Jun 16",
      "Body Battery": 64
    },
    {
      "Date": "Jun 16",
      "Body Battery": 100
    },
    {
      "Date": "Jun 16",
      "Body Battery": 100
    },
    {
      "Date": "Jun 16",
      "Body Battery": 58
    },
    {
      "Date": "Jun 16",
      "Body Battery": 58
    },
    {
      "Date": "Jun 16",
      "Body Battery": 22
    },
    {
      "Date": "Jun 17",
      "Body Battery": 21
    },
    {
      "Date": "Jun 17",
      "Body Battery": 37
    },
    {
      "Date": "Jun 17",
      "Body Battery": 34
    },
    {
      "Date": "Jun 17",
      "Body Battery": 18
    },
    {
      "Date": "Jun 17",
      "Body Battery": 18
    },
    {
      "Date": "Jun 17",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 18",
      "Body Battery": 5
    },
    {
      "Date": "Jun 19",
      "Body Battery": 5
    },
    {
      "Date": "Jun 19",
      "Body Battery": 5
    },
    {
      "Date": "Jun 19",
      "Body Battery": 5
    },
    {
      "Date": "Jun 19",
      "Body Battery": 13
    },
    {
      "Date": "Jun 19",
      "Body Battery": 13
    },
    {
      "Date": "Jun 19",
      "Body Battery": 24
    }
   ]});

})

router.get('/resting_heart_rate',(req,res) => {
  res.json({resting_heart_rate:[
    {
      "Date": "May 23",
      "Resting Heart Rate": 54
    },
    {
      "Date": "May 24",
      "Resting Heart Rate": 50
    },
    {
      "Date": "May 25",
      "Resting Heart Rate": 51
    },
    {
      "Date": "May 26",
      "Resting Heart Rate": 60
    },
    {
      "Date": "May 27",
      "Resting Heart Rate": 55
    },
    {
      "Date": "May 28",
      "Resting Heart Rate": 54
    },
    {
      "Date": "May 29",
      "Resting Heart Rate": 57
    },
    {
      "Date": "May 30",
      "Resting Heart Rate": 54
    },
    {
      "Date": "May 31",
      "Resting Heart Rate": 49
    },
    {
      "Date": "Jun 1",
      "Resting Heart Rate": 46
    },
    {
      "Date": "Jun 2",
      "Resting Heart Rate": 59
    },
    {
      "Date": "Jun 3",
      "Resting Heart Rate": 60
    },
    {
      "Date": "Jun 4",
      "Resting Heart Rate": 54
    },
    {
      "Date": "Jun 5",
      "Resting Heart Rate": 59
    },
    {
      "Date": "Jun 6",
      "Resting Heart Rate": 52
    },
    {
      "Date": "Jun 7",
      "Resting Heart Rate": 50
    },
    {
      "Date": "Jun 8",
      "Resting Heart Rate": 56
    },
    {
      "Date": "Jun 9",
      "Resting Heart Rate": 59
    },
    {
      "Date": "Jun 10",
      "Resting Heart Rate": 48
    },
    {
      "Date": "Jun 11",
      "Resting Heart Rate": 58
    },
    {
      "Date": "Jun 12",
      "Resting Heart Rate": 65
    },
    {
      "Date": "Jun 13",
      "Resting Heart Rate": 51
    },
    {
      "Date": "Jun 14",
      "Resting Heart Rate": 55
    },
    {
      "Date": "Jun 15",
      "Resting Heart Rate": 53
    },
    {
      "Date": "Jun 16",
      "Resting Heart Rate": 50
    },
    {
      "Date": "Jun 17",
      "Resting Heart Rate": 56
    },
    {
      "Date": "Jun 18",
      "Resting Heart Rate": 59
    },
    {
      "Date": "Jun 19",
      "Resting Heart Rate": 58
    }
   ]});

})

router.get('/sleep',(req,res) => {
  res.json({sleep:[
    {
      "Date": "May 23",
      "Sleep": "9:45 hrs"
    },
    {
      "Date": "May 24",
      "Sleep": "10:00 hrs"
    },
    {
      "Date": "May 25",
      "Sleep": "9:47 hrs"
    },
    {
      "Date": "May 26",
      "Sleep": "8:13 hrs"
    },
    {
      "Date": "May 27",
      "Sleep": "8:49 hrs"
    },
    {
      "Date": "May 28",
      "Sleep": "7:27 hrs"
    },
    {
      "Date": "May 29",
      "Sleep": "7:37 hrs"
    },
    {
      "Date": "May 30",
      "Sleep": "8:26 hrs"
    },
    {
      "Date": "May 31",
      "Sleep": "11:44 hrs"
    },
    {
      "Date": "Jun 1",
      "Sleep": "8:54 hrs"
    },
    {
      "Date": "Jun 2",
      "Sleep": "6:37 hrs"
    },
    {
      "Date": "Jun 3",
      "Sleep": "6:17 hrs"
    },
    {
      "Date": "Jun 4",
      "Sleep": "7:56 hrs"
    },
    {
      "Date": "Jun 5",
      "Sleep": "7:50 hrs"
    },
    {
      "Date": "Jun 6",
      "Sleep": "9:31 hrs"
    },
    {
      "Date": "Jun 7",
      "Sleep": "10:51 hrs"
    },
    {
      "Date": "Jun 8",
      "Sleep": "9:27 hrs"
    },
    {
      "Date": "Jun 9",
      "Sleep": "8:03 hrs"
    },
    {
      "Date": "Jun 10",
      "Sleep": "8:43 hrs"
    },
    {
      "Date": "Jun 11",
      "Sleep": "5:49 hrs"
    },
    {
      "Date": "Jun 12",
      "Sleep": "5:00 hrs"
    },
    {
      "Date": "Jun 13",
      "Sleep": "8:07 hrs"
    },
    {
      "Date": "Jun 14",
      "Sleep": "8:46 hrs"
    },
    {
      "Date": "Jun 15",
      "Sleep": "7:45 hrs"
    },
    {
      "Date": "Jun 16",
      "Sleep": "11:38 hrs"
    },
    {
      "Date": "Jun 17",
      "Sleep": "9:16 hrs"
    },
    {
      "Date": "Jun 18",
      "Sleep": "6:13 hrs"
    },
    {
      "Date": "Jun 19",
      "Sleep": "9:40 hrs"
    }
   ]});

})

router.get('/stress',(req,res) => {
  res.json({stress:[
    {
      "Date": "May 23",
      "Stress": 31
    },
    {
      "Date": "May 24",
      "Stress": 30
    },
    {
      "Date": "May 25",
      "Stress": 34
    },
    {
      "Date": "May 26",
      "Stress": 47
    },
    {
      "Date": "May 27",
      "Stress": 38
    },
    {
      "Date": "May 28",
      "Stress": 43
    },
    {
      "Date": "May 29",
      "Stress": 55
    },
    {
      "Date": "May 30",
      "Stress": 48
    },
    {
      "Date": "May 31",
      "Stress": 23
    },
    {
      "Date": "Jun 1",
      "Stress": 32
    },
    {
      "Date": "Jun 2",
      "Stress": 55
    },
    {
      "Date": "Jun 3",
      "Stress": 54
    },
    {
      "Date": "Jun 4",
      "Stress": 54
    },
    {
      "Date": "Jun 5",
      "Stress": 51
    },
    {
      "Date": "Jun 6",
      "Stress": 25
    },
    {
      "Date": "Jun 7",
      "Stress": 30
    },
    {
      "Date": "Jun 8",
      "Stress": 43
    },
    {
      "Date": "Jun 9",
      "Stress": 41
    },
    {
      "Date": "Jun 10",
      "Stress": 25
    },
    {
      "Date": "Jun 11",
      "Stress": 59
    },
    {
      "Date": "Jun 12",
      "Stress": 62
    },
    {
      "Date": "Jun 13",
      "Stress": 30
    },
    {
      "Date": "Jun 14",
      "Stress": 41
    },
    {
      "Date": "Jun 15",
      "Stress": 25
    },
    {
      "Date": "Jun 16",
      "Stress": 32
    },
    {
      "Date": "Jun 17",
      "Stress": 50
    },
    {
      "Date": "Jun 18",
      "Stress": 75
    },
    {
      "Date": "Jun 19",
      "Stress": 28
    }
   ]});

})

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
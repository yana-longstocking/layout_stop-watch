report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_started.png",
        "test": "../bitmaps_test/20241015-123145/Stopwatch_started.png",
        "selector": "body",
        "fileName": "Stopwatch_started.png",
        "label": "Stopwatch started",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.18755594889322919,
          "misMatchPercentage": "0.19",
          "analysisTime": 42
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_before_one_circle.png",
        "test": "../bitmaps_test/20241015-123145/Stopwatch_before_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_before_one_circle.png",
        "label": "Stopwatch before one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.6024678548177083,
          "misMatchPercentage": "0.60",
          "analysisTime": 38
        },
        "diffImage": "../bitmaps_test/20241015-123145/failed_diff_Stopwatch_before_one_circle.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_after_one_circle.png",
        "test": "../bitmaps_test/20241015-123145/Stopwatch_after_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_after_one_circle.png",
        "label": "Stopwatch after one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.5565643310546875,
          "misMatchPercentage": "0.56",
          "analysisTime": 39
        },
        "diffImage": "../bitmaps_test/20241015-123145/failed_diff_Stopwatch_after_one_circle.png"
      },
      "status": "fail"
    }
  ]
});
Plotly.d3.csv('assets/data/dummyData.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
        
var listofParam = unpack(rows, 'Parameter Names'),
    currentY = [],
    currentParam = unpack(rows, 'Batch No');

  
  function getParam(chosenParam) {

      currentY = unpack(rows, chosenParam);
  };

// Default Parameter
setBubblePlot('Para 1');
  
function setBubblePlot(chosenParam) {
    getParam(chosenParam);  

    var trace1 = {
      x: currentParam,
      y: currentY,
      mode: 'lines+markers',
      connectgaps: true,
      marker: {
        size: 5, 
        opacity: 0.5
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Multiple Parameter Chart',
      titlefont: {
        family: 'Raleway',
        size: 30,
        color: '#7f7f7f'
      } 
    };

    Plotly.newPlot('plotdiv', data, layout);
};
  
var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    paramSelector = innerContainer.querySelector('.paramdata');

function assignOptions(textArray, selector) {
  for (var i = 0; i < 13;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofParam, paramSelector);

function updateParam(){
    setBubblePlot(paramSelector.value);
}
  
paramSelector.addEventListener('change', updateParam, false);
});
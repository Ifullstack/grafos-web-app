var nodes = [
    { id: 1, label: '1', title: 'Clustering: ' + '0,25456' + '<br>' + 'Betweenness: ' + '2,5', value: 25, group: 20, x: -1392.5499, y: 1124.1614 },
    { id: 2, label: '2', title: 'Clustering: ' + '0,85232' + '<br>' + 'Betweenness: ' + '2,85', value: 25, group: 20, x: -660.82574, y: 1009.18976 },
    { id: 3, label: '3', title: 'Clustering: ' + '0,5648' + '<br>' + 'Betweenness: ' + '1,25', value: 25, group: 20, x: -85.6025, y: -6.6782646 },
    { id: 4, label: '4', title: 'Clustering: ' + '0,984648' + '<br>' + 'Betweenness: ' + '2,14', value: 25, group: 20, x: 427.39853, y: 1398.1720 },
    { id: 5, label: '5', title: 'Clustering: ' + '0,8787' + '<br>' + 'Betweenness: ' + '1,14', value: 25, group: 20, x: -133.68427, y: -732.50476 },
    { id: 6, label: '6', title: 'Clustering: ' + '0,89112' + '<br>' + 'Betweenness: ' + '1,41', value: 25, group: 20, x: 2042.4272, y: -579.6042 },
    { id: 7, label: '7', title: 'Clustering: ' + '0,1145' + '<br>' + 'Betweenness: ' + '2', value: 25, group: 20, x: 126.91814, y: 115.84123 },
    { id: 8, label: '8', title: 'Clustering: ' + '0,515562' + '<br>' + 'Betweenness: ' + '1', value: 25, group: 20, x: -638.503, y: -663.07904 },
    { id: 9, label: '9', title: 'Clustering: ' + '0,25564' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: -1657.1593, y: -645.2429 },
    { id: 10, label: '10', title: 'Clustering: ' + '0,1458' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -712.13385, y: 1053.3159 },
    { id: 11, label: '11', title: 'Clustering: ' + '0,645' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: 358.25735, y: 1238.4801 },
    { id: 12, label: '12', title: 'Clustering: ' + '0.384' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: -1115.8746, y: 250.34308 },
    { id: 13, label: '13', title: 'Clustering: ' + '0.5451' + '<br>' + 'Betweenness: ' + '5', value: 25, group: 20, x: 2028.4565, y: 1067.9126 },
    { id: 14, label: '14', title: 'Clustering: ' + '0.5254' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -341.64163, y: -1640.5049 },
    { id: 15, label: '15', title: 'Clustering: ' + '0.55612' + '<br>' + 'Betweenness: ' + '6', value: 25, group: 20, x: -1380.8287, y: 1169.2931 },
    { id: 16, label: '16', title: 'Clustering: ' + '0.95' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: -1268.165, y: -1469.7052 },
    { id: 17, label: '17', title: 'Clustering: ' + '0.565' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -2016.3092, y: 442.13663 },
    { id: 18, label: '18', title: 'Clustering: ' + '0.6551' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: 449.02316, y: 1183.7205 },
    { id: 19, label: '19', title: 'Clustering: ' + '0.655' + '<br>' + 'Betweenness: ' + '9', value: 25, group: 20, x: 51.16946, y: 883.6703 },
    { id: 20, label: '20', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 }

];
// create an array with edges, array de arcos
var edges = [
    { from: 1, to: 20, id: 26, label: '1', title: 'Clustering:from:1 to 20 ' + '0,25456' + '<br>' + 'Betweenness: ' + '2,5', value: 25, group: 20, x: -1392.5499, y: 1124.1614 },
    { from: 1, to: 15, id: 2, label: '2', title: 'Clustering:from:1 to 15 ' + '0,85232' + '<br>' + 'Betweenness: ' + '2,85', value: 25, group: 20, x: -660.82574, y: 1009.18976 },
    { from: 1, to: 4, id: 3, label: '3', title: 'Clustering:from:1 to 4 ' + '0,5648' + '<br>' + 'Betweenness: ' + '1,25', value: 25, group: 20, x: -85.6025, y: -6.6782646 },
    { from: 1, to: 3, id: 4, label: '4', title: 'Clustering:from:1 to 3 ' + '0,984648' + '<br>' + 'Betweenness: ' + '2,14', value: 25, group: 20, x: 427.39853, y: 1398.1720 },
    { from: 1, to: 2, id: 5, label: '5', title: 'Clustering:from:1 to 2 ' + '0,8787' + '<br>' + 'Betweenness: ' + '1,14', value: 25, group: 20, x: -133.68427, y: -732.50476 },
    { from: 2, to: 5, id: 6, label: '6', title: 'Clustering:from:2 to 5 ' + '0,89112' + '<br>' + 'Betweenness: ' + '1,41', value: 25, group: 20, x: 2042.4272, y: -579.6042 },
    { from: 2, to: 15, id: 7, label: '7', title: 'Clustering:from:2 to 15 ' + '0,1145' + '<br>' + 'Betweenness: ' + '2', value: 25, group: 20, x: 126.91814, y: 115.84123 },
    { from: 2, to: 3, id: 8, label: '8', title: 'Clustering:from:2 to 3 ' + '0,515562' + '<br>' + 'Betweenness: ' + '1', value: 25, group: 20, x: -638.503, y: -663.07904 },
    { from: 3, to: 4, id: 9, label: '9', title: 'Clustering:from:3 to 4 ' + '0,25564' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: -1657.1593, y: -645.2429 },
    { from: 4, to: 5, id: 10, label: '10', title: 'Clustering: ' + '0,1458' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -712.13385, y: 1053.3159 },
    { from: 5, to: 6, id: 11, label: '11', title: 'Clustering: ' + '0,645' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: 358.25735, y: 1238.4801 },
    { from: 6, to: 7, id: 12, label: '12', title: 'Clustering: ' + '0.384' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: -1115.8746, y: 250.34308 },
    { from: 7, to: 8, id: 13, label: '13', title: 'Clustering: ' + '0.5451' + '<br>' + 'Betweenness: ' + '5', value: 25, group: 20, x: 2028.4565, y: 1067.9126 },
    { from: 8, to: 9, id: 14, label: '14', title: 'Clustering: ' + '0.5254' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -341.64163, y: -1640.5049 },
    { from: 9, to: 10, id: 15, label: '15', title: 'Clustering: ' + '0.55612' + '<br>' + 'Betweenness: ' + '6', value: 25, group: 20, x: -1380.8287, y: 1169.2931 },
    { from: 10, to: 11, id: 16, label: '16', title: 'Clustering: ' + '0.95' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: -1268.165, y: -1469.7052 },
    { from: 11, to: 12, id: 17, label: '17', title: 'Clustering: ' + '0.565' + '<br>' + 'Betweenness: ' + '7', value: 25, group: 20, x: -2016.3092, y: 442.13663 },
    { from: 12, to: 13, id: 18, label: '18', title: 'Clustering: ' + '0.6551' + '<br>' + 'Betweenness: ' + '8', value: 25, group: 20, x: 449.02316, y: 1183.7205 },
    { from: 13, to: 14, id: 19, label: '19', title: 'Clustering: ' + '0.655' + '<br>' + 'Betweenness: ' + '9', value: 25, group: 20, x: 51.16946, y: 883.6703 },
    { from: 14, to: 15, id: 20, label: '20', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 },
    { from: 15, to: 16, id: 21, label: '21', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 },
    { from: 16, to: 17, id: 22, label: '22', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 },
    { from: 17, to: 18, id: 23, label: '23', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 },
    { from: 18, to: 20, id: 24, label: '24', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 },
    { from: 20, to: 20, id: 25, label: '25', title: 'Clustering: ' + '0.785' + '<br>' + 'Betweenness: ' + '3', value: 25, group: 20, x: 784.4289, y: -1547.6515 }
];
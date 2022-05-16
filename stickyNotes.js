const fs = require('fs');

const colors = [[255, 238, 238], [255, 246, 234], [247, 233, 215], [235, 216, 195]];

const messages = JSON.parse(fs.readFileSync('./messages.json', 'utf-8'));

const randomNumber = limit => Math.ceil(Math.random() * limit);

const randomAngle = () => randomNumber([30, -30][randomIndex(2)]);

const randomIndex = length => Math.floor(Math.random() * length);

const randomMessage = () => messages[randomIndex(messages.length)];

const margin = value => 'margin:' + value + 'px;';

const height = value => 'height:' + value + 'px;';

const width = value => 'width:' + value + 'px;';

const randomColor = () => colors[randomIndex(colors.length)];

const color = () => 'background-color: rgb(' + randomColor() + ');';

const generateCard = () => '<div style ="' + margin(50) + height(200) + width(300) + color() + ' display: flex; justify-content: center; align-items: center; text-align:center;transform:rotate(' + randomAngle() + 'deg)">' + randomMessage() + '</div>';

const page = () => '<html><head><title>Sticky Notes</title></head><body><h1 style = "text-align:center">Sticky Notes</h1><div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center">' + Array(20).fill(1).map(generateCard).join('') + '</div></body>';

fs.writeFileSync('notes.html', page(), 'utf8');

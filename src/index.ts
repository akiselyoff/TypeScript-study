function getPromise() {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge(objA, objB) {
  return Object.assign(objA, objB);
}

class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

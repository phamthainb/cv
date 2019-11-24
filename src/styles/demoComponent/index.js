import React, { Component } from "react";
import { BsModal, BsSlide, BsTab, BsCollapse, BsLazyLoadImage } from "@basesShared";
import { SelectControl, InputControl, TextareaControl } from "@basesControls";

export class BsImage extends Component {
  render() {
    return (
      <BsLazyLoadImage className="img" src="static/images/logo.gif" alt=""/>
    );
  }
}
export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false
    };
  }
  showModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };
  processWhenClose = () => {
    console.log("a");
    // code here
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };
  render() {
    return (
      <main id="main">
        <button type="button" onClick={this.showModal}>
          showModal
        </button>

        <BsModal
          title="title demo"
          titleProcess="Xử lý"
          titleClose="Đóng"
          closeIcon='<i class="far fa-window-close"></i>'
          toggleModal={this.state.toggleModal}
          onClick={this.showModal}
          processWhenClose={this.processWhenClose}
        >
          đây là nội dung
        </BsModal>
      </main>
    );
  }
}

export class Slide extends Component {
  render() {
    var slideSettings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      centerMode: false,
      centerPadding: "0",
      dots: false,
      fade: false,
      autoplay: true,
      infinite: false,
      draggable: false,
      swipeToSlide: false,
      touchMove: false,
      swipe: false,
      nextArrowSetting: {
        label: "next page1",
        className: "list__control next__btn"
      },
      prevArrowSetting: {
        label: "prev page1",
        className: "list__control prev__btn"
      },
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <main id="main">
        <BsSlide {...slideSettings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </BsSlide>
      </main>
    );
  }
}
export class Collapse extends Component {
  render() {
    const collapseDemo = [
      {
        head: "Câu hỏi 1",
        content: "COLLAPSE 1",
        iconNormal: '<i class="far fa-plus-square"></i>',
        iconActive: '<i class="far   fa-minus-square"></i>'
      },
      {
        head: "Câu hỏi 2",
        content: "COLLAPSE 2",
        iconNormal: '<i class="far fa-plus-square"></i>',
        iconActive: '<i class="far   fa-minus-square"></i>'
      },
      {
        head: "Câu hỏi 2",
        content: "COLLAPSE 2",
        iconNormal: '<i class="far fa-plus-square"></i>',
        iconActive: '<i class="far   fa-minus-square"></i>'
      }
    ];
    return (
      <main id="main">
        <BsCollapse {...collapseDemo} />
      </main>
    );
  }
}
export class Tab extends Component {
  render() {
    var tabDemo = [
      {
        label: "tab1",
        main: () => <div>tab1</div>
      },
      {
        label: "hoho",
        main: () => <div>hoho</div>
      },
      {
        label: "tab3",
        main: () => <div>tab3</div>
      },
      {
        label: "tab4",
        main: () => <div>tab4</div>
      }
    ];
    return (
      <main id="main">
        <BsTab {...tabDemo} />
      </main>
    );
  }
}
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "luan",
      gender: "male",
      finish: [
        {
          label: "work1",
          status: true
        },
        {
          label: "work2",
          status: true
        },
        {
          label: "work3",
          status: false
        }
      ],
      messages: "",
      selectOption: [
        {
          value: "true",
          label: "Kích hoạt"
        },
        {
          value: "false",
          label: "Ẩn"
        }
      ]
    };
  }
  onBlur = task => {
    if (task.id >= 0) {
      const newArr = [...this.state[task.name]];
      newArr.splice(task.id, 1, {
        label: task.label,
        status: task.status
      }),
        this.setState({
          [task.name]: newArr
        });
    } else {
      this.setState(task);
    }
  };
  render() {
    console.log(this.state)
    const { name, gender, finish, selectOption } = this.state;
    return (
      <div className="panel-body">
        <InputControl
          value={name}
          name="name"
          type="text"
          className="form-control"
          onBlur={this.onBlur}
        />
        <SelectControl
          value={status}
          className="form-control"
          name="status"
          onBlur={this.onBlur}
        >
          {this.state.selectOption.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </SelectControl>
        <InputControl
          name="gender"
          value="female"
          onBlur={this.onBlur}
          className="form-control"
          type="radio"
          check={gender}
        />
        Nam <br />
        <InputControl
          name="gender"
          value="male"
          onBlur={this.onBlur}
          className="form-control"
          type="radio"
          check={gender}
        />
        nữ <br />
        {finish.map((item, index) => {
          return (
            <div key={index}>
              <InputControl
                index={index}
                name="finish"
                value={item.label}
                onBlur={this.onBlur}
                type="checkbox"
                className="form-control"
                objValue={item}
              />
              {item.label}
            </div>
          );
        })}
        <TextareaControl
        value={name}
        name="messages"
        onBlur={this.onBlur}
        className="form-control"
      />
      </div>
    );
  }
}


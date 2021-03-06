import React, { Fragment } from "react";
import { handleSubRouter } from "../../store/action/create-action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";


const HeaderView = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  
  // 取出仓库中定义的 state
  const state = useSelector((state) => {
    return state;
  });
  const { routerList } = state.router;
  const params= props.location.state
  console.log(params)
  return (
    <Fragment>
      <div className="header-userInfo">
        <p className="header-userInfo-p">
          {typeof params === "string"|| !params ? (
            <span className="header-userInfo-span">{params}</span>
          ) : (
            <>
              <span className="header-userInfo-span">
                {params.fatherNode} /{" "}
              </span>
              <span className="header-userInfo-span">{params.content}</span>
            </>
          )}
        </p>
      </div>
      <div className="header-view">
        {routerList.map((item, index) => {
          return (
            <p className="header-view-p" key={index}>
              <span
                style={{ marginRight: 10 }}
                onClick={() => {
                  props.history.push(item.path, item);
                }}
              >
                {typeof item.content === "string" ? item.content : item.title}
              </span>
              <CloseOutlined
                onClick={() => {
                  let _routerList = routerList.filter((_item, _index) => {
                    return _item !== item;
                  });
                  dispatch(handleSubRouter(_routerList));
                }}
              ></CloseOutlined>
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  // withRouter传入的prop，用于编程式导航
 
  return {};
}

// export default FormList
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(React.memo(HeaderView))
);

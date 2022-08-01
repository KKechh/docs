import Translate from "@docusaurus/Translate";
import React from "react";

export default function Diagnosis(): JSX.Element {
  return (
    <form>
      <div className="DocSearch-Form margin-bottom--md">
        <input
          className="DocSearch-Input"
          placeholder="邮箱"
          type="email"
        ></input>
      </div>
      <div className="DocSearch-Form margin-bottom--md">
        <input
          className="DocSearch-Input"
          placeholder="域名，只需输入其中一个"
          type="text"
        ></input>
      </div>
      <div className="DocSearch-Form margin-bottom--md">
        <select className="DocSearch-Input" placeholder="验证方式">
          <option>
            <Translate>请选择申请时候的验证方式</Translate>
          </option>
          <option value="http-01">
            <Translate>HTTP</Translate>
          </option>
          <option value="dns-01">
            <Translate>DNS</Translate>
          </option>
        </select>
      </div>
      <button type="submit" className="button button--secondary button--lg">
        <Translate>提交</Translate>
      </button>
    </form>
  );
}

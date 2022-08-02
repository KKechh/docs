import Translate, {translate} from "@docusaurus/Translate";
import React from "react";

export default class Diagnosis extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      challenge: "",
    };
  }

  private handleChallengeChange = (event) => {
    this.setState({challenge: event.target.value});
  }

  private handleSubmit = (e: any): void => {
    if ((this.state as any).challenge === "") {
      alert('验证类型不能为空!');
      return;
    }
    if ((this.state as any).challenge === "dns-01" && 1 + Number(((this.state as any).domain.replace(/\./g, ''))) - 1 == Number(((this.state as any).domain.replace(/\./g, '')))) {
      alert('IP 必须用HTTP! 请重新申请试试!');
      return;
    }
    if ((this.state as any).challenge === "http-01" && /^\*\./.test((this.state as any).domain)) {
      alert('通配符必须用DNS! 请重新申请试试!');
      return;
    }

    this.setState(() => ({
      step: 2,
    }));
  }

  render(): JSX.Element {
    return (
      <div>
        <iframe src="about:blank" id="diagnosis-result" name="diagnosis-result" width="100%" height="400px" style={{border: 'none', display: (this.state as any)?.step == 1 ? 'none' : 'block'}}></iframe>
        <form
          action="https://docs.hi.cn/diagnosis"
          method="POST"
          target="diagnosis-result"
          onSubmit={this.handleSubmit}
          style={{display: (this.state as any)?.step == 1 ? 'block' : 'none'}}
        >
          <p>
            <Translate>
              当您订单出现申请不下来的情况，例如一直重试并 processing；您可以尝试提供如下下单的信息，诊断工具将帮助找到无法签发的原因。
            </Translate>
          </p>
          <div className="DocSearch-Form">
            <input
              className="DocSearch-Input"
              placeholder={translate({message: '邮箱'})}
              type="email"
              name="contact"
              required
            ></input>
          </div>
          <p>
            <Translate>
              注册设备的邮箱
            </Translate>
            <span className="margin-left--sm">
              (<a href="/docs/getting-started/account-registration">查看“注册设备”教程</a>)
            </span>
          </p>
          <div className="DocSearch-Form">
            <input
              className="DocSearch-Input"
              placeholder={translate({message: '域名'})}
              type="text"
              name="identifier"
              required
            ></input>
          </div>
          <p>
            <Translate>
              IP 证书请输入 IP 地址。如果多域名只需输入其中一个
            </Translate>
          </p>
          <div className="DocSearch-Form">
            <select
              className="DocSearch-Input"
              placeholder={translate({message: '验证方式'})}
              name="challenge"
              required
              value={(this.state as any).challenge}
              onChange={this.handleChallengeChange}
            >
              <option>请选择验证方式</option>
              <option value="dns-01">DNS / dns-01</option>
              <option value="http-01">HTTP / http-01</option>
            </select>
          </div>
          <p>
            <Translate>
              需要与您申请时候的验证方式保持一致
            </Translate>
          </p>
          <button
            type="submit"
            className="button button--secondary button--lg"
          >
            <Translate>
              提交
            </Translate>
          </button>
        </form>
      </div>
    );
  }
}


import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

function Footer(): ReactNode {

    return (
        <div className="section footer">
            <div className="content">
                <div className="w-layout-grid grid-footer">
                    <div
                        id="w-node-_6603d099-87ea-d392-449a-caaf2cdb7f91-2cdb7f8e"
                        data-w-id="6603d099-87ea-d392-449a-caaf2cdb7f91"
                        className="block-footer"
                    >
                        <img
                            src="/img/logo.svg"
                            loading="lazy"
                            alt=""
                            className="logo-footer"
                        />
                        <p className="paragraph-footer">
                            A highly scalable, reliable and open-source NR backhaul for high
                            throughput, enterprise use cases.
                            <br />
                            <br />‍<br />
                            <a href="mailto:info@yoursite.com" className="link-underlined">
                                info@unifyair.com
                            </a>
                        </p>
                    </div>
                    <div
                        id="w-node-d3c0963b-94d1-2e8e-002f-dd4f891a4970-2cdb7f8e"
                        className="w-layout-hflex flex-block"
                    >
                        <div
                            data-w-id="6603d099-87ea-d392-449a-caaf2cdb7f99"
                            className="block-footer"
                        >
                            <div className="heading-footer">Quick Links</div>
                            <a
                                href="about.html"
                                aria-current="page"
                                className="link-footer w--current"
                            >
                                About
                            </a>
                            <a href="contact.html" className="link-footer">
                                Contact
                            </a>
                            <a href="blog.html" className="link-footer">
                                Docs
                            </a>
                        </div>
                        <div
                            data-w-id="6603d099-87ea-d392-449a-caaf2cdb7fa5"
                            className="block-footer"
                        >
                            <div className="heading-footer">Social</div>
                            <a
                                href="https://github.com/unifyair"
                                target="_blank"
                                className="link-footer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/unifyair"
                                target="_blank"
                                className="link-footer"
                            >
                                X
                            </a>
                            <a
                                href="https://discord.gg/yuJHdZ4vEF"
                                target="_blank"
                                className="link-footer"
                            >
                                Discord
                            </a>
                            <a
                                href="https://unifyair.discourse.group"
                                target="_blank"
                                className="link-footer"
                            >
                                Forum
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    data-w-id="6603d099-87ea-d392-449a-caaf2cdb7fbb"
                    className="footer-down"
                >
                    <p className="paragraph-footer" />
                </div>
            </div>
        </div>
    );

}

export default React.memo(Footer);

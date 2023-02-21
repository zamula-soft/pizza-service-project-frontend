import React, { Component } from 'react'

export default class FooterComponent extends Component {
    render() {
        return (
        <div class="footer">

            <div class="col-auto">
                <div class="d-flex justify-content-end">
                    <ul class="list-inline list-separator">

                        <li class="list-inline-item">
                            <p class="fs-6 mb-0">© Copyright    <span class="d-none d-sm-inline-block">2023</span></p>
                        </li>

                        <li class="list-inline-item">
                            <a class="list-separator-link" href="#">FAQ</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="list-separator-link" href="#">License</a>
                        </li>

                        <li class="list-inline-item">
                            <button class="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                            <i class="bi-command"></i>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>




        </div>
        )
    }
}


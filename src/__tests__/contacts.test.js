import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Contacts } from "../pages/Contacts";
import { addMinutes } from "date-fns";

const users = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Bella",
      last: "Lee",
    },
    location: {
      street: {
        number: 1855,
        name: "Guyton Street",
      },
      city: "Hastings",
      state: "Otago",
      country: "New Zealand",
      postcode: 84877,
      coordinates: {
        latitude: "58.4444",
        longitude: "51.5919",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "bella.lee@example.com",
    login: {
      uuid: "276c2549-def7-47a8-b20f-a9c3cc4c12ef",
      username: "yellowostrich657",
      password: "987987",
      salt: "40EDPIBi",
      md5: "d04515cadc1650c954971f23a181de61",
      sha1: "a59f6cd77233df44e9ef0d25175885318e4616b1",
      sha256:
        "6c98bc2dee127a050980df06b3fc2d529a8201c7899aff7428e3dab380d5c27c",
    },
    dob: {
      date: "1987-05-01T23:58:41.433Z",
      age: 34,
    },
    registered: {
      date: "2005-08-06T05:36:51.357Z",
      age: 16,
    },
    phone: "(727)-019-9275",
    cell: "(573)-573-6471",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    },
    nat: "NZ",
  },
];

const handlers = [
  rest.get("https://randomuser.me/api/?results=10", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: users,
      })
    );
  }),
];

const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe(`contacts get data`, () => {
  test(`loading`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader);
  });

  test(`success`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
  });
});

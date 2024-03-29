import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { useEffect, useState } from "react";

// cambio de tema.
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

export const NavbarPortafolio = () => {
    //cambio de tema
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    // para evitar renderizaso en server
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
      }, []);

    const collapseItems = [
        "Perfil",
        "Proyectos",
        "Contacto",
      ];
    return (
        <>
            {isClient &&
                <Navbar isBordered variant="sticky">
                    <Navbar.Toggle showIn="xs" />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                        }}
                    >
                        <AcmeLogo />
                        <Text b color="inherit" hideIn="xs">
                            ACME
                        </Text>
                        
                    </Navbar.Brand>
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="warning"
                        hideIn="xs"
                        variant="highlight"
                    >
                        <Navbar.Link href="#">Features</Navbar.Link>
                        <Navbar.Link isActive href="#">
                            Customers
                        </Navbar.Link>
                        <Navbar.Link href="#">Pricing</Navbar.Link>
                        <Navbar.Link href="#">Company</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Content
                        css={{
                            "@xs": {
                                w: "12%",
                                jc: "flex-end",
                            },
                        }}
                    >
                        <div>
                            <Switch
                                checked={isDark}
                                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            />
                        </div>
                        <Dropdown placement="bottom-right">
                            <Navbar.Item>
                                <Dropdown.Trigger>
                                    <Avatar
                                        bordered
                                        as="button"
                                        color="warning"
                                        size="md"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </Dropdown.Trigger>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="User menu actions"
                                color="warning"
                                onAction={(actionKey) => console.log({ actionKey })}
                            >
                                <Dropdown.Item key="profile" css={{ height: "$18" }} textValue="profile">
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as
                                    </Text>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        zoey@example.com
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    My Settings
                                </Dropdown.Item>
                                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                                <Dropdown.Item key="analytics" withDivider>
                                    Analytics
                                </Dropdown.Item>
                                <Dropdown.Item key="system">System</Dropdown.Item>
                                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                                <Dropdown.Item key="help_and_feedback" withDivider>
                                    Help & Feedback
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" withDivider color="error">
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Content>
                    <Navbar.Collapse disableAnimation>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem
                                key={item}
                                activeColor="warning"
                                css={{
                                    color: index === collapseItems.length - 1 ? "$error" : "",
                                }}
                                isActive={index === 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>
            }
        </>

    )
}

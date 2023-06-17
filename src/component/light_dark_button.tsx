"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const LigthDarkBtn = (
    props:{className : string}
) => {
    const { className } = props
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	return (
		<div className={className}>
			{currentTheme === "dark" ? (
				<SunIcon
					className="h-10 w-10 cursor-pointer text-yellow-300"
					onClick={() => {
						setTheme("light")
					}}
				/>
			) : (
				<MoonIcon
					className="h-10 w-10 cursor-pointer text-slate-700"
					onClick={() => {
						setTheme("dark")
					}}
				/>
			)}
		</div>
	)
}
export default LigthDarkBtn